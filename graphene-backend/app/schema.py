from graphene import Field, ObjectType, String, ID
from graphene_federation import build_schema, key

@key("id")
class User(ObjectType):
    id = ID(required=True)
    username = String(required=True)

class Query(ObjectType):
    user = Field(User, id=ID(required=True))

    def resolve_user(self, info, id):
        """
        Here we resolve the user entity by its `id` field.
        """
        return User(id=id, username=f"user{id} (from the python graphene backend)")

schema = build_schema(query=Query)

if __name__ == "__main__":
    from graphql import graphql
    result = graphql(schema, '{ _service { sdl } }')
    print(result.data["_service"]["sdl"].strip())
