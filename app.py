import os
import json

from flask import Flask, render_template, abort

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
json_path = os.path.join(basedir, 'data', 'projects.json')


def load_projects():
    """Load and return projects list from JSON. Returns [] on any failure."""
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data.get('projects', [])
    except FileNotFoundError:
        print(f'Warning: projects.json not found at {json_path}')
        return []
    except json.JSONDecodeError as exc:
        print(f'Warning: Invalid JSON in projects.json: {exc}')
        return []
    except Exception as exc:
        print(f'Warning: Could not load projects: {exc}')
        return []


def image_exists(relative_path):
    """Return True if a file exists at static/images/<relative_path>."""
    full = os.path.join(basedir, 'static', 'images', relative_path)
    return os.path.exists(full)


@app.route('/')
def index():
    projects = load_projects()
    featured = [p for p in projects if p.get('featured')]
    labs = [p for p in projects if not p.get('featured')]

    has_culinary_image = image_exists('extracurricular/culinary-masterclass.jpg')
    has_volunteer_image = image_exists('volunteering/cpca-event.jpg')

    return render_template(
        'index.html',
        projects=projects,
        featured=featured,
        labs=labs,
        has_culinary_image=has_culinary_image,
        has_volunteer_image=has_volunteer_image,
    )


@app.route('/project/<int:project_id>')
def project_detail(project_id):
    projects = load_projects()
    project = next((p for p in projects if p.get('id') == project_id), None)
    if project is None:
        abort(404)

    has_hero_image = False
    images = project.get('images', [])
    if images:
        rel = images[0]
        has_hero_image = image_exists(rel)

    return render_template('project_detail.html', project=project, has_hero_image=has_hero_image)


@app.errorhandler(404)
def not_found(exc):
    return render_template('404.html'), 404


@app.errorhandler(500)
def server_error(exc):
    return render_template('500.html'), 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_DEBUG', 'False') == 'True'
    app.run(host='0.0.0.0', port=port, debug=debug)
