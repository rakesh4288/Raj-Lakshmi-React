import { render, screen } from "@testing-library/react";
import ReactRouterPage from "./ReactRouterPage";


test("Router CASE 1: Checking content available", () => {
    render(<ReactRouterPage />)
    const daughter = screen.getByTestId('daughter');
    expect(daughter).toBeInTheDocument();
})