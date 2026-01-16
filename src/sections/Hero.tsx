import React from 'react';
import Container from '../components/Container';

export default function Hero() {
    return (
        <Container className="py-20">
            <h1 className="text-4xl font-bold">Rosario Arguello</h1>
            <p className="mt-4 text-lg text-gray-700">Senior frontend engineer with a background in UX/UI design, focused on building clean, performant, and accessible user interfaces.</p>
            <p>I have 8 years of experience working with JavaScript and modern frontend frameworks, and I enjoy collaborating closely with product and design to turn ideas into reliable, well-crafted interfaces.</p>
            <p>I am particularly interested in design systems, component libraries, and tools that help teams move fast while maintaining visual consistency and quality.</p>
        </Container>
    );
}
