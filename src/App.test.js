import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders challenge text', () => {
  render(<App />);
  const titleElement = screen.getByText(/I have a secret number./i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input label', () => {
  render(<App />);
  const element = screen.getByText(/Your guess?/i);
  expect(element).toBeInTheDocument();
});

test('renders check button', () => {
  render(<App />);
  const element = screen.getByText(/Check #1/i);
  expect(element).toBeInTheDocument();
});

describe('answers properly to guesses', () => {
  const cases = [
    ['1234', '1234', '4-4'],
    ['1234', '9876', '0-0'],
    ['1234', '4321', '4-0'],
    ['1234', '1235', '3-3'],
    ['1234', '2134', '4-2'],
    ['1234', '1342', '4-1'],
    ['1234', '2212', '2-1'],
    ['1234', '1111', '1-1'],    
  ];
  cases.map( c => {
    test('' + c, () => {
      const wrapper = shallow(<App />);
      render(<i>{wrapper.instance().getGuessResult(c[0], c[1])}</i>);
      const element = screen.getByText(c[2]);
      expect(element).toBeInTheDocument();
    });
  });
});
