package Q5;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;

public class Transacao {
    private double valor;
    private Date data;
    private String tipo; // Tipos: DEPOSITO, RETIRADA, TRANSFERENCIA...

    public Transacao(double valor, Date data, String tipo) {
        this.valor = valor;
        this.tipo = tipo;
        this.data = data;
    }

    public Date getData() {
        return data;
    }

    public String getTipo() {
        return tipo;
    }

    public double getValor() {
        return valor;
    }
}
