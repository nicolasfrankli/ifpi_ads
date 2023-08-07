// https://glysns.gitbook.io/java-basico/programacao-orientada-a-objetos/enums

public enum StatusTarefa {
	PENDENTE ("Pendente"),
	EM_EXECUÇAO ("Em execução"),
	CONCLUIDA ("Concluída");

	private String nome;
	private String sigla;
	
	private EstadoBrasileiro(String sigla, String nome) {
		this.sigla = sigla;
		this.nome = nome;
	}
	public String getSigla() {
		return sigla;
	}
	public String getNome() {
		return nome;
	}
	public String getNomeMaiusculo() {
		return nome.toUpperCase();
	}
	
}