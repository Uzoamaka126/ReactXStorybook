import React, { useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';

export const FadeIn = () => {

    // you can set whatever css you want
    // then tell useSpring that this is the element/component
    // you want to animate

    const [showText, setShowText] = useState(true);
    const animation = useSpring({
        opacity: showText ? 1 : 0,
        transform: showText ? `translate(0)` : `translate(-30%)`
    });

    return (
        <div>
            <button 
                onClick={() => setShowText(!showText)}
            >
                Toggle Animation
            </button>
            <animated.p style={animation}>This is a text!</animated.p>
        </div>
    )
}

export function TransitionExample() {
    const [items, set] = useState([]);

    const transitions = useTransition(items, item => item.key, {
        from: { opacity: 0 },
        enter: { opacity: 1},
        leave:{ opacity: 0 }
    });

    return transitions.map(
        ({ item, props, key }) => 
            <animated.div key={key} style={props}>{item.text}</animated.div>
    )
}

export function TransitionBetweenTwoElements() {
    const [toggle, set] = useState(false);

    const transitions = useTransition(toggle, null, {
        // the position is set to absolute because when
        // during transitions or mounting, there is going to be some weird
        // jumping around. By doing this, we'll make sure that it fades
        // in and out at the same exact position
        from: { position: "absolute", opacity: 0 },
        enter: { opacity: 1},
        leave:{ opacity: 0 }
    });

    return transitions.map(
        ({ item, props, key }) => 
            item ? (
                <animated.div style={props}>Hello</animated.div>

            ) : (
                <animated.div style={props}>Goodbye</animated.div>
            )
    )
}