package br.org.generation.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_categoria")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull(message = "")
	@Size(min = 4, max = 255, message = "O atributo produto deve conter no mínimo 04 e no máximo 255 caracteres")
	private String produto;

	@NotNull(message = "")
	// adicionar um metodo para gerar uma menssagem
	private boolean disponibilidade;

	@NotNull(message = "")
	@Size(min = 4, max = 255, message = "O atributo palavra chave deve conter no mínimo 04 e no máximo 255 caracteres")
	private String palavra_chave;

}
