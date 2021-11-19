package br.org.generation.backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "tb_categoria")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull(message = "O campo categoria é obrigatório")
	@Size(min = 4, max = 255, message = "O atributo categoria deve conter no mínimo 04 e no máximo 255 caracteres")
	private String tipo;

	@Size(min = 4, max = 1000, message = "O atributo descrição deve conter no mínimo 04 e no máximo 1000 caracteres")
	private String descricao;
	
	@Size(min = 4, max = 255, message = "O atributo palavra chave deve conter no mínimo 04 e no máximo 255 caracteres")
	private String palavrachave;
	
	@OneToMany(mappedBy = "categoria",cascade =CascadeType.ALL)
	@JsonIgnoreProperties("categoria")
	private List<Produto> produto;
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setCategoria(String tipo) {
		this.tipo = tipo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getPalavrachave() {
		return palavrachave;
	}

	public void setPalavrachave(String palavrachave) {
		this.palavrachave = palavrachave;
	}	

}
