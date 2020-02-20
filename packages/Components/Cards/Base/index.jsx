import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const VHCardBase = props => {
    return (
      <S.Card
        onClick={props.onEvent ? props.onEvent : () => {}}
        draggable={props.draggable}
        onDragEnter={props.onDragEnter}
        onDragLeave={props.onDragLeave}
        onDragStart={props.onDragStart}
        noBorder={props.noBorder}
        favorite={props.favorite}
        noHover={props.noHover}
      >
        {props.children}
      </S.Card>
    )

}

VHCardBase.defaultProps = {
  className: '',
  noBorder: false,
  favorite: false,
  noHover: false,
}

VHCardBase.propTypes = {
  className: PropTypes.string,
  noBorder: PropTypes.bool,
  favorite: PropTypes.bool,
  noHover: PropTypes.bool,
}

export default VHCardBase
