import { render } from '@testing-library/react';
import VolumeControl from '../components/VolumeControl';
import { expect, it, describe } from 'vitest';

describe('VolumeControl Component', () => {
    it('renders with default volume', () => {
        const { container } = render(<VolumeControl volume={50} onVolumeChange={() => {}} />);
        expect(container).toMatchSnapshot();
    });

    it('renders with muted volume', () => {
        const { container } = render(<VolumeControl volume={0} onVolumeChange={() => {}} />);
        expect(container).toMatchSnapshot();
    });

    it('renders with max volume', () => {
        const { container } = render(<VolumeControl volume={100} onVolumeChange={() => {}} />);
        expect(container).toMatchSnapshot();
    });
});
