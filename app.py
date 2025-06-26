
from flask import Flask, render_template
from flask import redirect, url_for
from forms import UserForm 


app = Flask(__name__)
app.config['SECRET_KEY'] = 'supersecretkey'


@app.route('/')
def home():
    return 'Hello, Flask!'

@app.route('/user/<username>')
def user(username):
    return render_template('user.html', username=username)

@app.route('/form/', methods=['GET', 'POST'])
def form():
    form = UserForm()

    if form.validate_on_submit():
        username = form.username.data
        return redirect(url_for('user', username=username))
    return render_template('form.html', form=form)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
