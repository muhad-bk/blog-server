environment             = "production"
project_id              = "amplication"
region                  = "us-east1"
database_tier           = "db-custom-4-4096"
cloud_run_min_replica   = 1
cloud_run_max_replica   = 5
db_user                 = "amplication"
db_name                 = "blog"
container_concurrency    = 100
cpu                      = "4"
memory                   = "4Gi"
cpu_allocation           = "allways"