import React, { useState } from 'react';
import { streamDreamInterpretation } from './api/dreamApi';
import { GlobalStyle, theme } from './styles/theme';
import ReactMarkdown from 'react-markdown';
import {
  AppContainer,
  MainContainer,
  Header,
  LogoContainer,
  Title,
  Card,
  SectionTitle,
  TextArea,
  Button,
  InterpretationContainer,
  Footer,
  Spinner,
  FormGroup,
  Label,
  Flex,
} from './components/StyledComponents';

function App() {
  const [dreamText, setDreamText] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dreamText.trim()) return;
    
    setIsLoading(true);
    setInterpretation('');
    setError('');
    
    try {
      // Use the streaming API to get real-time updates
      await streamDreamInterpretation(dreamText, (text) => {
        setInterpretation(text);
      });
    } catch (err) {
      setError('Error interpreting dream. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <LogoContainer>
            <Title>✨ ruya.ai</Title>
          </LogoContainer>
        </Header>
        
        <MainContainer>
          <Card>
            <SectionTitle>Dream Interpretation</SectionTitle>
            <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.md }}>
              This tool interprets dreams according to Islamic traditions, drawing from the works of Ibn Sirin.
              Enter your dream below to receive an interpretation.
            </p>
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="dreamText">Describe your dream:</Label>
                <TextArea
                  id="dreamText"
                  value={dreamText}
                  onChange={(e) => setDreamText(e.target.value)}
                  placeholder="I dreamt of flying over mountains and oceans..."
                  required
                />
              </FormGroup>
              
              <Button type="submit" disabled={isLoading || !dreamText.trim()}>
                {isLoading ? 'Interpreting...' : 'Interpret Dream'}
              </Button>
            </form>
            
            {isLoading && <Spinner />}
            
            {error && (
              <div style={{ color: theme.colors.error, marginTop: theme.spacing.md }}>
                {error}
              </div>
            )}
            
            {interpretation && (
              <>
                <SectionTitle style={{ marginTop: theme.spacing.lg }}>Interpretation</SectionTitle>
                <InterpretationContainer>
                  <ReactMarkdown>{interpretation}</ReactMarkdown>
                </InterpretationContainer>
              </>
            )}
          </Card>
        </MainContainer>
        
        <Footer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md, maxWidth: '800px', margin: '0 auto', padding: `${theme.spacing.md} 0` }}>
            <div>
              <h3 style={{ color: theme.colors.textPrimary, marginBottom: theme.spacing.sm }}>About</h3>
              <p style={{ color: theme.colors.textSecondary }}>
                This application uses AI to interpret dreams according to Islamic traditions, 
                particularly drawing from the works of Ibn Sirin, a renowned Islamic dream interpreter.
              </p>
              <p style={{ color: theme.colors.textSecondary, marginTop: theme.spacing.sm }}>
                The interpretations are generated using Google's Gemini AI model.
              </p>
              <p style={{ color: theme.colors.textSecondary, marginTop: theme.spacing.sm }}>
                <strong>Note:</strong> This is for educational and entertainment purposes only.
              </p>
            </div>
            <div style={{ marginTop: theme.spacing.sm }}>
              &copy; {new Date().getFullYear()} Islamic Dream Interpreter | Powered by Gemini AI
            </div>
          </div>
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;