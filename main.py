from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

names = {
    "douglas": {"age": 35, "gender": "male"},
    "lima": {"age": 36, "gender": "male"}
}

class HelloWorld(Resource):
    def get(self, name):
        return names[name]

    def post(self):
        return {"data": "Posted"}

api.add_resource(HelloWorld, "/helloworld/<string:name>")

if __name__ == "__main__":
    app.run(debug=True)