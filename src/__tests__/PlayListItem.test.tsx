import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';
import { expect, it, describe } from 'vitest';

describe('PlayListItem Component', () => {
    it('renders correctly when selected', () => {
        const { container } = render(
            <PlayListItem
                title='Test Song'
                artist='Test Artist'
                duration='3:30'
                isSelected={true}
                onClick={() => {}}
            />    
        );
        expect(container).toMatchSnapshot();
    });

    it('renders correctly when not selected', () => {
        const { container } = render(
            <PlayListItem
                title="Another Song"
                artist="Another Artist"
                duration="4:00"
                isSelected={false}
                onClick={() => {}}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
