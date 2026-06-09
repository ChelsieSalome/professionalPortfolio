import os
import json

from flask import Flask, render_template, abort

app     = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))


def load_projects():
    path = os.path.join(basedir, 'data', 'projects.json')
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f).get('projects', [])
    except Exception as exc:
        print(f'[WARN] Could not load projects.json: {exc}')
        return []


def image_exists(relative_path):
    return os.path.exists(os.path.join(basedir, 'static', 'images', relative_path))


@app.route('/')
def index():
    projects  = load_projects()
    featured  = [p for p in projects if p.get('featured')]
    labs      = [p for p in projects if not p.get('featured')]
    proj_json = json.dumps(projects, ensure_ascii=False)

    has_hero      = image_exists('hero.jpg')
    has_culinary  = image_exists('pili-pili.jpeg')
    has_volunteer = image_exists('cloud-summit.jpg')

    return render_template(
        'index.html',
        featured=featured,
        labs=labs,
        projects_json=proj_json,
        has_hero=has_hero,
        has_culinary_image=has_culinary,
        has_volunteer_image=has_volunteer,
    )


@app.route('/project/<int:project_id>')
def project_detail(project_id):
    projects = load_projects()
    project  = next((p for p in projects if p.get('id') == project_id), None)
    if project is None:
        abort(404)
    proj_json = json.dumps(project, ensure_ascii=False)
    return render_template('project_detail.html', project=project, project_json=proj_json)


@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def server_error(e):
    return render_template('500.html'), 500


if __name__ == '__main__':
    port  = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_DEBUG', 'False') == 'True'
    app.run(host='0.0.0.0', port=port, debug=debug)
