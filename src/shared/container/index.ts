import { container } from "tsyringe"
import { IUsersRepository } from "../../modules/accounts/repositories/implementatios/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/UsersRepository"


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)