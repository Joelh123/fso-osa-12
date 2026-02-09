import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Todo from "./Todo";

test("add todo", () => {
	const todo = {
		text: "99testtodo88",
		done: false,
	};

	render(<Todo todo={todo} />);

	const element = screen.getByText("99testtodo88");
	expect(element).toBeDefined();
});
