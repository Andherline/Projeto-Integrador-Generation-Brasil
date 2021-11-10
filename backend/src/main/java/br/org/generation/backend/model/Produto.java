package br.org.generation.backend.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_produtos")
public class Produto {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		
		
		@NotBlank(message = "Nome é obrigaório!") 
		@Size(max=255, message = "No máximo 255 caracteres")
		private String nome;
	
		
		@NotNull(message = "Preço é obrigatório!")
		@Positive(message = "O preço deve ser maior do que zero!")
		@JsonFormat(shape=JsonFormat.Shape.STRING)
		private BigDecimal preco;
		
		
		@NotBlank(message="Descrição é obrigatório!")
		@Size(max=1000)
		private String descricao;
		
		@NotNull(message = " Campo Obrigatório!")
		private String foto;
		
		@ManyToOne
		@JsonIgnoreProperties("produto")
		private Categoria categoria;

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public BigDecimal getPreco() {
			return preco;
		}

		public void setPreco(BigDecimal preco) {
			this.preco = preco;
		}

		public String getDescricao() {
			return descricao;
		}

		public void setDescricao(String descricao) {
			this.descricao = descricao;
		}

		public String getFoto() {
			return foto;
		}

		public void setFoto(String foto) {
			this.foto = foto;
		}

		public Categoria getCategoria() {
			return categoria;
		}

		public void setCategoria(Categoria categoria) {
			this.categoria = categoria;
		}
		
	
	

}
