import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Testimonial from './Testimonial';

describe('Testimonial', () => {
  test('renders the Testimonial component without errors', () => {
    render(<Testimonial />);
  });

  test('displays the testimonial text', () => {
    render(<Testimonial />);
    const testimonialText = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    expect(testimonialText).toBeInTheDocument();
  });

  test('renders the previous and next buttons', () => {
    render(<Testimonial />);
    const previousButton = screen.getByLabelText('Previous slide');
    const nextButton = screen.getByLabelText('Next slide');
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('clicking the previous button changes the displayed testimonial', () => {
    render(<Testimonial />);
    const previousButton = screen.getByLabelText('Previous slide');
    const initialTestimonial = screen.getByText('Fantastic');
    fireEvent.click(previousButton);
    const updatedTestimonial = screen.getByText('Another testimonial');
    expect(updatedTestimonial).toBeInTheDocument();
    expect(initialTestimonial).not.toBeInTheDocument();
  });

  test('clicking the next button changes the displayed testimonial', () => {
    render(<Testimonial />);
    const nextButton = screen.getByLabelText('Next slide');
    const initialTestimonial = screen.getByText('Fantastic');
    fireEvent.click(nextButton);
    const updatedTestimonial = screen.getByText('Yet another testimonial');
    expect(updatedTestimonial).toBeInTheDocument();
    expect(initialTestimonial).not.toBeInTheDocument();
  });
});
