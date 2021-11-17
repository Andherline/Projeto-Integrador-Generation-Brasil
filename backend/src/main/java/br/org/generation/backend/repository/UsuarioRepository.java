package br.org.generation.backend.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.backend.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	/** 
	 * Método criado para a Sessão de testes
	 */ 
	public List<Usuario> findAllByUsuarioContainingIgnoreCase(String usuario);
	
	public Optional<Usuario> findByUsuario(String usuario);

}