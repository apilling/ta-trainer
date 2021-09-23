import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Simulate } from 'react-dom/test-utils';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  it("has the Control Panel when the application loads", () => {
    const element = screen.getByText("Control Panel");

    expect(element).toBeInTheDocument();
  })

  it("has the Card Viewer when the application loads", () => {
    const element = screen.getByText("Card Viewer");

    expect(element).toBeInTheDocument();
  })

  it("does not show the Answer when we first load", () => {
    const element = screen.queryByTestId("answer-label");

    expect(element).not.toBeInTheDocument();
  });

  it("does show the Answer when we click the reveal button", async () => {
    const button = screen.getByTestId("reveal-answer-button");
    button.click();
    const element = await screen.findByTestId("answer-label");
    expect(element).toBeInTheDocument();
  });

  it("does show the new card when we add card", async () => {
    const button = screen.getByTestId("add-new-card-button");
    button.click();
    const button2 = screen.getByTestId("save-changes-button");
    button2.click();
    const element = await screen.getByTestId("prompt-label");
    expect(element.textContent).toEqual("PROMPT TEXT");
  })

  it("does not show the new card when modal is closed", async () => {
    const button = screen.getByTestId("add-new-card-button");
    button.click();
    const button2 = screen.getByTestId("close-button");
    button2.click();
    const element = await screen.getByTestId("prompt-label");
    expect(element.textContent).not.toEqual("PROMPT TEXT");
  })

    
})
