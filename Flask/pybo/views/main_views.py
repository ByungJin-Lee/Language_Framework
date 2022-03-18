from flask import Blueprint

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def index_pybo():
    return "index, pybo"

@bp.route('/hello')
def hello_pybo():
    return "hello, pybo"