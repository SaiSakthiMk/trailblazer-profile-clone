#!/usr/bin/env python3
"""
Salesforce Trailblazer Profile Extractor
Extracts profile metadata and GraphQL queries for a given Trailblazer URL or slug.
"""
import sys
import json
import urllib.request
import re

DEFAULT_SLUG = "uosi9ld098jtpwbu87"
GRAPHQL_URL = "https://profile.api.trailhead.com/graphql"

def fetch_trailblazer_html(slug):
    url = f"https://www.salesforce.com/trailblazer/{slug}"
    req = urllib.request.Request(url, headers={
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    })
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"[!] Error fetching profile page: {e}")
        return None

def extract_chassis_profile(html):
    m = re.search(r'var\s+profile\s*=\s*(\{.*?\});', html)
    if m:
        try:
            return json.loads(m.group(1))
        except Exception:
            pass
    return None

def query_graphql(slug):
    query = """
    query GetProfileStatus($slug: String, $hasSlug: Boolean!) {
      profile(slug: $slug) @include(if: $hasSlug) {
        __typename
        ... on PublicProfile {
          id
          trailheadStats {
            earnedPointsSum
            earnedBadgesCount
            completedTrailCount
            rank {
              title
              imageUrl
            }
          }
        }
        ... on PrivateProfile {
          __typename
        }
      }
    }
    """
    req = urllib.request.Request(
        GRAPHQL_URL,
        data=json.dumps({"query": query, "variables": {"slug": slug, "hasSlug": True}}).encode("utf-8"),
        headers={"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        return {"error": str(e)}

def main():
    slug = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SLUG
    print(f"[*] Extracting Salesforce Trailblazer profile for slug: {slug}")
    html = fetch_trailblazer_html(slug)
    if html:
        profile = extract_chassis_profile(html)
        print(f"[*] Embedded profile data in HTML:")
        print(json.dumps(profile, indent=2))
    
    print("\n[*] Querying Trailhead GraphQL API...")
    gql_data = query_graphql(slug)
    print(json.dumps(gql_data, indent=2))

if __name__ == "__main__":
    main()
