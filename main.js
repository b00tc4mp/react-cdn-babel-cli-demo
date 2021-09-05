const { Component, createElement: e } = React

class LikeButton extends Component {
    constructor(props) {
        super(props)

        this.state = { liked: false }
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.'
        }

        return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like')
    }
}

ReactDOM.render(e(LikeButton), document.querySelector('#root'))