import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DashboardPage } from '../pages/DashboardPage';
import { BanksPage } from '../pages/BanksPage';
import { GuestsPage } from '../pages/GuestsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
            />
            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <RegisterPage />
                    </PublicRoute>
                }
            />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/banks"
                element={
                    <ProtectedRoute>
                        <BanksPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/guests"
                element={
                    <ProtectedRoute>
                        <GuestsPage />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
