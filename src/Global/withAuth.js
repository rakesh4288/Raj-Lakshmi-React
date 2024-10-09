

const withAuth = (Component) => {
    const isAuthentication = true;
    return function (props) {
        // add some enhacement code logic here
        console.log('withAuth Props =', props);
        if (isAuthentication) {
            return <Component {...props}/>
        } else {
            return <div className="text-danger">Your Authentication Failed !!</div>
        }
    }
}

export default withAuth;