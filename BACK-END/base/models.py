import uuid
from django.db import models
from django.db import models
from django.utils import timezone

class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        """Override save to update `updated_at` before saving."""
        self.updated_at = timezone.now()
        super().save(*args, **kwargs)

    def to_dict(self):
        """Return a dict representation of the instance."""
        return {
            field.name: getattr(self, field.name)
            if not isinstance(getattr(self, field.name), (timezone.datetime,))
            else getattr(self, field.name).strftime("%d-%b-%Y")
            for field in self._meta.fields
        }

    def __str__(self):
        return f"[{self.__class__.__name__}] ({self.id}) {self.to_dict()}"
