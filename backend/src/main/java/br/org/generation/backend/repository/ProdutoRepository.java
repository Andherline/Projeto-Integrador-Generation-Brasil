package br.org.generation.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.backend.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
									
	public List<Produto> findAllByNomeContainingIgnoreCase(String nome);
}
