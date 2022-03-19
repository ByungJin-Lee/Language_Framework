from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import config as config

#create_app 내부에 선언하면, 외부에서 사용할 수 없음
#따라서 외부에 선언한 뒤, 내부에서 작업함
db = SQLAlchemy()
migrate = Migrate()

def create_app():
	app = Flask(__name__)
	app.config.from_object(config)

	#ORM 설정, 이후 flask db init을 사용
	db.init_app(app)
	migrate.init_app(app, db)

	from . import models


	#db 명령어
	#flask db migrate - 모델을 생성하거나 변경(실행 -> 작업파일 생성)
	#flask db upgrade - 모델 변경 반영(작업파일 -> 모델 반영)
	#모델은 일종의 파이썬 클래스

	from .views import main_views
	app.register_blueprint(main_views.bp)	

	return app