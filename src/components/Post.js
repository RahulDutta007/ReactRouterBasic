import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postAction'

class Post extends React.Component {

	handleClick = () => {
		this.props.deletPost(this.props.post.id);
		this.props.history.push('/');
	}

	render() {
		console.log(this.props);
		const post = this.props.post ? (
				
					<div className="post">
						<h4 className="center">{this.props.post.title}</h4>
						<p>{this.props.post.body}</p>
						<div className="center">
							<button className="btn grey" onClick={this.handleClick}>
							Delete Post
							</button>
						</div>
					</div>
				
			) : (
			
				<div className="center">Loading Post...</div>
			
		)

		return (
			<div className="container">
				{post}
			</div>
		)
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deletPost: (id) => { dispatch(deletePost(id)) }
	}
}


const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.id;
	return {
		post: state.posts.find(post => post.id == id)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);