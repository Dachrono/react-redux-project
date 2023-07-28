import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import Header from '../components/Header';

describe ('Test header', () => {
    test('test load component in DOM', () => {
        const header = render ( <MemoryRouter initialEntries={['/']}><Header /></MemoryRouter> )
        expect(header).toMatchSnapshot(); 
    })
    
    test('test logo image', () => {
        const header = render ( <MemoryRouter initialEntries={['/']}><Header /></MemoryRouter> )
        const logo = document.querySelector('.logo')
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src','logo.png');
    })

    test('test links', () => {
        const header = render ( <MemoryRouter initialEntries={['/']}><Header /></MemoryRouter> )
        const links = document.querySelectorAll('.links')
        expect(links).toHaveLength(3);  
    })
})

