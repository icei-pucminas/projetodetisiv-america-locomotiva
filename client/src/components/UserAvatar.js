import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'antd'

function UserAvatar({ user, size = 32 }) {
  const style = {
    width: size,
    height: size,
    fontSize: size * 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const avatar = user
    ? user.avatar || `https://api.adorable.io/avatars/285/${user.email}`
    : `https://api.adorable.io/avatars/285/motorman`

  return <Avatar style={style} src={avatar} />
}

UserAvatar.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    nomeCompleto: PropTypes.string,
  }),
  size: PropTypes.number,
}

UserAvatar.defaultProps = {
  user: null,
  size: 32,
}

export default UserAvatar