
terraform {
  backend "s3" {
    bucket         = "meu-bucket-de-estado-terraform-unico" # IMPORTANTE: Escolha um nome único globalmente!
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks" # Tabela para evitar conflitos
  }
}
