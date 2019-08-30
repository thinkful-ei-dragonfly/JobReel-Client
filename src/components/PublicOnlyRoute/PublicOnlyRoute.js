import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import JobReelContext from '../../context/JobReelContext'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <JobReelContext.Consumer>
          {jobReelContext =>
            !!jobReelContext.user.id
              ? <Redirect to={'/dashboard'} />
              : <Component {...componentProps} />
          }
        </JobReelContext.Consumer>
      )}
    />
  )
}
