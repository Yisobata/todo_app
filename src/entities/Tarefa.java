@Entity   

@Data
@Table(name = "tarefas")
public class Tarefa {
    @Id   

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String descricao;
    @Enumerated(EnumType.STRING)
    private Status status;
    @CreationTimestamp
    private LocalDateTime dataCriacao;
}