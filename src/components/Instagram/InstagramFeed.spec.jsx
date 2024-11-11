import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InstagramFeed from './InstagramFeed'; // Importe o componente InstagramFeed

describe('InstagramFeed', () => {
  it('should render the logo image with correct src and alt text', () => {
    render(<InstagramFeed />);
    
    // Verifica se a imagem está sendo renderizada com o texto alternativo correto
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'public/perfil.jpg'); // Verifica o src da imagem
  });

  it('should render the follow button', () => {
    render(<InstagramFeed />);
    
    // Verifica se o botão "Seguir" está presente
    const followButton = screen.getByRole('button', { name: /seguir/i });
    expect(followButton).toBeInTheDocument();
  });

  it('should redirect to Instagram on follow button click', () => {
    // Usando um mock de window.location.href para verificar o redirecionamento
    const mockLocation = vi.fn();
    global.location = { href: mockLocation }; // Mocking window.location.href
    
    render(<InstagramFeed />);
    
    const followButton = screen.getByRole('button', { name: /seguir/i });
    
    // Simula o clique no botão
    fireEvent.click(followButton);

    // Verifica se o redirecionamento para o Instagram ocorreu
    expect(mockLocation).toHaveBeenCalledWith('https://www.instagram.com/casalarderionovo/');
  });

  it('should render the iframe with correct src', () => {
    render(<InstagramFeed />);
    
    // Verifica se o iframe está presente com o src correto
    const iframe = screen.getByTitle('Instagram Feed');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', '//lightwidget.com/widgets/d0edcf82099f50f89e5ca32baced7ada.html');
  });
});
