import React, { startTransition, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

const TextAnimations = ({ value }: { value: string }) => {
    // return <ShowScaleAnimation value={value} />
    // return <WordByWordAnimation value={value} />
    return <WordInView value={value} />

}

export default TextAnimations;




const ShowScaleAnimation = ({ value }: { value: string }) => {
    const ele = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ele,
        offset: ['start 0.7', 'start 0.25'],
    });
    useEffect(() => {
        scrollYProgress.on("change", console.log);
    }, [])
    return (
        <motion.p style={{ opacity: scrollYProgress }} className='text' ref={ele}>
            {value}
        </motion.p>
    )
}

const WordByWordAnimation = ({ value }: { value: string }) => {
    const ele = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ele,
        offset: ['start 0.7', 'start 0.25']
    });
    useEffect(() => {

        // scrollYProgress.on("change", (e)=>console.log(e));
    }, [])
    const word = value.split(" ");
    return <motion.p ref={ele} className='text'>{word.map((item: string, idx: number) => {
        const start = idx / word.length;
        const end = start + (1 / word.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        return (
            <span className='span' key={idx}>
                <span className='shadow'>{item}</span>
                <motion.span
                    className='span'
                    style={{ display: "inline-block", opacity }} key={idx} >{item}
                </motion.span>
            </span>

        )
    })}</motion.p>
}




