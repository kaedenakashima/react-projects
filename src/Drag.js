import React, { Component } from 'react';
import styled from 'styled-components';
import { Gesture } from 'react-with-gesture';
import { animated, interpolate } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import { Card } from 'Elements';

const AnimCard = Card.withComponent(animated.div);

const DragCard = styled(AnimCard)`
  height: 300px;
  position: absolute;
`;

const CardContainer = styled(animated.div)`
  position: relative;
  background: #ccc;
  max-width: 340px;
  margin: 0 auto;
  border-radius: 5px;
  height: 340px;
`;
export default class Drag extends Component {
  onUp = xDelta => {
    console.log(xDelta);
    if (xDelta < -300) {
      alert('Remove Card');
    } else if (xDelta > 300) {
      alert('Alert Card');
    }
  };
  render() {
    return (
      <Gesture>
        {({ down, delta: [xDelta] }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            immediate={name => down && name === 'x'}
          >
            {({ x }) => (
              <CardContainer
                style={{
                  background: x.interpolate({
                    range: [-300, 300],
                    output: ['#FF1C68', '#14D790'],
                    extrapolate: 'clamp'
                  })
                }}
              >
                <DragCard
                  onMouseUp={this.onUp(xDelta)}
                  onTouchEnd={this.onUp(xDelta)}
                  style={{
                    opacity: x.interpolate({
                      range: [-300, 300],
                      output: [0, 1],
                      extrapolate: 'clamp'
                    }),
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: 'clamp'
                        })
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  }}
                >
                  <h1>Drag me</h1>
                </DragCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
