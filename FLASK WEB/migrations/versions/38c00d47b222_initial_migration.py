"""initial migration

Revision ID: 38c00d47b222
Revises: 6e004f33a78c
Create Date: 2023-11-29 08:38:28.025727

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '38c00d47b222'
down_revision = '6e004f33a78c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=60), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###
