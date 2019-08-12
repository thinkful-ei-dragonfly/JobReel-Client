handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
        name: name.value,
        username: username.value,
        password: password.value,
    })
        .then(user => {
            name.value = ''
            username.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
}


