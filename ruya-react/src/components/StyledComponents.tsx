import styled from 'styled-components';
import { theme } from '../styles/theme';

// Container for the entire app
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.auroraGradient};
    background-size: 400% 400%;
    z-index: 0;
    filter: blur(120px);
    opacity: 0.6;
    animation: aurora 15s ease infinite;
  }
  
  @keyframes aurora {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`;

// Main content container
export const MainContainer = styled.main`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Header component
export const Header = styled.header`
  background-color: ${theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`;

// Logo container
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

// App title
export const Title = styled.h1`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.typography.fontSizes.xl};
  font-weight: ${theme.typography.fontWeights.bold};
  margin: 0;
  background: ${theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: 1px;
`;

// Card component for content sections
export const Card = styled.div`
  background-color: ${theme.colors.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: ${theme.borders.radius.lg};
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform ${theme.transitions.medium}, box-shadow ${theme.transitions.medium};
  width: 100%;
  max-width: 800px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(138, 133, 255, 0.2) 0%, transparent 70%);
    opacity: 0.5;
    z-index: -1;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(83, 197, 255, 0.2) 0%, transparent 70%);
    opacity: 0.5;
    z-index: -1;
  }
`;

// Section title
export const SectionTitle = styled.h2`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.typography.fontSizes.lg};
  font-weight: ${theme.typography.fontWeights.semiBold};
  margin-bottom: ${theme.spacing.md};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${theme.colors.gradient2};
    border-radius: ${theme.borders.radius.sm};
  }
`;

// Form input
export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: rgba(45, 45, 65, 0.3);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borders.radius.md};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.typography.fontSizes.md};
  transition: all ${theme.transitions.medium};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(138, 133, 255, 0.2);
    background-color: rgba(45, 45, 65, 0.5);
  }
`;

// Text area
export const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: ${theme.spacing.md};
  background-color: rgba(45, 45, 65, 0.3);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borders.radius.md};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.typography.fontSizes.md};
  resize: vertical;
  transition: all ${theme.transitions.medium};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(138, 133, 255, 0.2);
    background-color: rgba(45, 45, 65, 0.5);
  }
`;

// Button
export const Button = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  background: ${theme.colors.gradient1};
  color: ${theme.colors.textPrimary};
  border: none;
  border-radius: ${theme.borders.radius.md};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: ${theme.typography.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.gradient2};
    z-index: -1;
    opacity: 0;
    transition: opacity ${theme.transitions.medium};
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    background: ${theme.colors.surfaceLight};
    color: ${theme.colors.textDisabled};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &::before {
      opacity: 0;
    }
  }
`;

// Interpretation container
export const InterpretationContainer = styled.div`
  background-color: rgba(45, 45, 65, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: ${theme.borders.radius.md};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.md};
  white-space: pre-wrap;
  line-height: 1.6;
  border: 1px solid rgba(83, 197, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(to bottom right, rgba(138, 133, 255, 0.1), transparent, rgba(83, 197, 255, 0.1));
    transform: rotate(30deg);
    pointer-events: none;
  }
`;

// Footer
export const Footer = styled.footer`
  background-color: ${theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: ${theme.spacing.lg} ${theme.spacing.lg};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSizes.sm};
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`;

// Sidebar
export const Sidebar = styled.aside`
  background-color: ${theme.colors.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borders.radius.lg};
  margin-bottom: ${theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  height: fit-content;
  position: sticky;
  top: ${theme.spacing.lg};
`;

// Loading spinner
export const Spinner = styled.div`
  border: 4px solid rgba(138, 133, 255, 0.1);
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: ${theme.spacing.md} auto;
  background: ${theme.colors.gradient1};
  background-size: 100%;
  background-clip: border-box;
  -webkit-background-clip: border-box;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Form group
export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

// Label
export const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: ${theme.typography.fontWeights.medium};
`;

// Flex container
export const Flex = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

// Icon
export const Icon = styled.span`
  font-size: ${theme.typography.fontSizes.lg};
  margin-right: ${theme.spacing.sm};
`;