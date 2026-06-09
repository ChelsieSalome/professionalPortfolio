#!/usr/bin/env python3
"""
validate_projects.py
Validates data/projects.json for completeness and correctness.
Usage: python validate_projects.py
"""
import json, sys, os, re
from urllib.parse import urlparse

RED    = '\033[91m'
YELLOW = '\033[93m'
GREEN  = '\033[92m'
RESET  = '\033[0m'
BOLD   = '\033[1m'

errors   = []
warnings = []

def ok(msg):   print(f"  {GREEN}[OK]{RESET} {msg}")
def warn(msg): warnings.append(msg); print(f"  {YELLOW}[WARN]{RESET} {msg}")
def err(msg):  errors.append(msg);   print(f"  {RED}[ERR]{RESET} {msg}")

REQUIRED = ['id','featured','diagram_type','title','title_fr','type','type_fr',
            'short_description','short_description_fr','full_description','full_description_fr',
            'problem','problem_fr','solution','solution_fr','technologies',
            'challenges','challenges_fr','impact','impact_fr',
            'github_url','demo_url','youtube_url','images']
FR_FIELDS = ['title_fr','type_fr','short_description_fr','full_description_fr',
             'problem_fr','solution_fr','challenges_fr','impact_fr']
VALID_DIAGRAM_TYPES = {'gke','ci_pipelines','nginx_lb','drugs2door',
                       'k8s_lab','terraform_aws','packer_terraform',
                       'aws_networking','ansible','terraform_modules','aws_asg','lab'}
VALID_URL_RE = re.compile(r'^https?://')

print(f"\n{BOLD}Validating data/projects.json...{RESET}\n")
path = os.path.join(os.path.dirname(__file__), 'data', 'projects.json')

try:
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    ok("Valid JSON syntax")
except FileNotFoundError:
    print(f"{RED}FATAL: data/projects.json not found at {path}{RESET}"); sys.exit(1)
except json.JSONDecodeError as e:
    print(f"{RED}FATAL: Invalid JSON — {e}{RESET}"); sys.exit(1)

projects = data.get('projects', [])
if not isinstance(projects, list):
    err("'projects' must be an array"); sys.exit(1)
ok(f"{len(projects)} projects found")

ids = [p.get('id') for p in projects]
if sorted(ids) != list(range(1, len(ids)+1)):
    err(f"IDs are not sequential 1-{len(ids)}: {ids}")
elif len(set(ids)) != len(ids):
    err(f"Duplicate IDs: {[i for i in ids if ids.count(i)>1]}")
else:
    ok("Sequential IDs with no duplicates")

featured = [p for p in projects if p.get('featured')]
labs     = [p for p in projects if not p.get('featured')]
ok(f"{len(featured)} featured, {len(labs)} lab projects")

for p in projects:
    pid = p.get('id', '?')
    # Required fields
    for field in REQUIRED:
        if field not in p:
            err(f"Project {pid}: missing field '{field}'")
        elif isinstance(p[field], str) and p[field].strip() == '' and field not in ('github_url','demo_url','youtube_url'):
            err(f"Project {pid}: empty required string '{field}'")
    # Types
    if not isinstance(p.get('technologies'), list) or len(p.get('technologies',[])) == 0:
        err(f"Project {pid}: 'technologies' must be a non-empty array")
    if 'featured' in p and not isinstance(p['featured'], bool):
        err(f"Project {pid}: 'featured' must be a boolean")
    if p.get('diagram_type') not in VALID_DIAGRAM_TYPES:
        warn(f"Project {pid}: diagram_type '{p.get('diagram_type')}' not in known set")
    # URLs
    for url_field in ('github_url','demo_url','youtube_url'):
        v = p.get(url_field)
        if v is not None and not VALID_URL_RE.match(str(v)):
            err(f"Project {pid}: invalid URL in '{url_field}': {v}")
    # FR fields
    for fr in FR_FIELDS:
        if not p.get(fr, '').strip():
            warn(f"Project {pid}: empty or missing '{fr}'")

print()
print(f"{'='*50}")
print(f"{BOLD}RESULT{RESET}: {len(errors)} error(s), {len(warnings)} warning(s)")
if errors:
    print(f"{RED}Validation FAILED. Fix errors above before deploying.{RESET}")
    sys.exit(1)
elif warnings:
    print(f"{YELLOW}Validation passed with warnings. Missing FR translations may affect French users.{RESET}")
else:
    print(f"{GREEN}Validation PASSED. All checks clear.{RESET}")
print()
