import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops';
import { animated, config } from 'react-spring';
import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';

export default class Modal extends Component {
  static defaultProps = {
    color: 'black'
  };
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          native
          config={config.gentle}
          items={on}
          unique
          from={{ opacity: 0, bgOpacity: 0, y: '-50px' }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: '0px' }}
          leave={{ opacity: 0, bgOpacity: 0, y: '50px' }}
        >
          {on =>
            on &&
            (styles => (
              <ModalWrapper
                style={{
                  transform: styles.y.interpolate(
                    y => `translate3d(0, ${styles.y}, 0)`
                  ),
                  ...styles
                }}
              >
                <ModalCard>
                  <CloseButton onClick={toggle}>
                    <Icon name='close' />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background
                  style={{ opacity: styles.bgOpacity }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))
          }
        </Transition>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimCard = Card.withComponent(animated.div);

//const ModalCard = styled(AnimCard)`
const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  ${absolute({
    y: 'top',
    x: 'right'
  })};
`;

const Background = styled(animated.div)`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
