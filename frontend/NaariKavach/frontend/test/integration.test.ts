import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import AuthRoute from "../../src/routes/AuthRoute";

describe("AuthRoute Integration", () => {
  test("redirects unauthenticated user to login", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          {/* Protect /dashboard route with AuthRoute */}
          <Route element={<AuthRoute isAuth={false} />}>
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          </Route>

          {/* Public login route */}
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Expect unauthenticated user to be redirected to Login
    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
});
