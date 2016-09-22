const React = require('react')

class ThemedDecorations extends React.Component {
    render() {
        const child = React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, {
                          className: this.props.theme
                        })
                      })
                      
        return (
            <div>
                {child}
            </div>
        )
    }
}

module.exports = ThemedDecorations