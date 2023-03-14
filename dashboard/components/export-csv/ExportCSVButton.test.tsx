import { render, screen } from '@testing-library/react';
import ExportCSVButton from './ExportCSVButton';

const props = {
  id: undefined,
  exportCSV: jest.fn(),
  loading: false
};

describe('Export CSV component', () => {
  it('should render without crashing', () => {
    render(<ExportCSVButton {...props} />);
  });

  it('should display loading spinner if loading is true', () => {
    render(<ExportCSVButton {...props} loading={true} />);
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
