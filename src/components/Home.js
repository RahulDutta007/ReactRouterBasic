import React from 'react'
import { Link } from 'react-router-dom';
import musk from '../tesla.png';
import { connect } from 'react-redux';

class Home extends React.Component {

	render() {
		console.log(this.props);
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map(post => {
				return(
					<div className="post card" key={post.id}>
						
						<div className="card-content">
							<Link to={'/'+post.id}>
								<span className="card-title">{post.title}</span>
							</Link>
						</div>
						<p>{post.body}</p>
					</div>
				)	
		})
		) : (
			<div className="center">No posts yet</div>
		)
		return (
			<div className="container home">
				<h4 className="center">Home</h4>
				<img src={musk} />
				{postList}	
			</div>
		)

	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home);