import { render, screen } from '@testing-library/react';
import AnswersList from './AnswersList';

test('renders empty list', () => {
  render(<AnswersList items={[]}/>);
  const items = screen.queryAllByRole('listitem');
  expect(items).toHaveLength(0);
});

test('renders list with n items', () => {
  const x = [
    {id: 1, text: 'foo', result: '0-0'},
    {id: 2, text: 'bar', result: '0-0'}
  ];
  render(<AnswersList items={x}/>);
  const items = screen.queryAllByRole('listitem');
  expect(items).toHaveLength(2);
});

test('renders answer\'s text', () => {
  const x = [{id: 1, text: 'foo', result: '0-0'}];
  render(<AnswersList items={x}/>);
  const item = screen.getByText(/foo/);
  expect(item).toBeInTheDocument;
});

test('renders answer\'s result', () => {
  const x = [{id: 1, text: 'foo', result: '0-0'}];
  render(<AnswersList items={x}/>);
  const item = screen.getByText(/0-0/);
  expect(item).toBeInTheDocument;
});
