import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import JobReelContext from '../../context/JobReelContext'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <JobReelContext.Consumer>
          {jobReelContext =>
            !!jobReelContext.user.id
              ? <Component {...componentProps} />
              : (
                <Redirect
                  to={{
                    pathname: jobReelContext.user.idle ? '/login' : '/register',
                    state: { from: componentProps.location },
                  }}
                />
              )
          }
        </JobReelContext.Consumer>
      )}
    />
  )
}